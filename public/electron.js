const path = require("path");
const http = require("http");
const express = require("express");
const expressApp = express();
const cors = require("cors");
const router = express.Router();

const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
  // require("@electron/remote/main").initialize();
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minHeight: 300,
    minWidth: 400,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  win.removeMenu(); //Removes the menu from Electron's menu bar'

  globalShortcut.register("f5", function () {
    win.reload();
  });

  ipcMain.handle("close-window", async (event) => {
    win.close();
  });

  ipcMain.handle("min-window", async (event) => {
    win.minimize();
  });

  ipcMain.handle("max-window", async (event) => {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

expressApp.use(cors());

// You only need to send the name of the file, not full path
router.get("*", function (req, res) {
  res.sendFile(req.url);
});

expressApp.use("/", router);

http.createServer(expressApp).listen(8000);
