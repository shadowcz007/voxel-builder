const { app, BrowserWindow, Menu, nativeImage } = require('electron');

let mainWindow = null;

if (!app.requestSingleInstanceLock()) {
	app.quit();
} else {
	app.on('second-instance', (ev, cmd, dir) => {
		if (mainWindow) {
			if (mainWindow.isMinimized()) mainWindow.restore();
			mainWindow.focus();
		}
	});
}

Menu.setApplicationMenu(false);

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 900,
		icon: nativeImage.createFromDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABVRJREFUWEetV31MVWUY/73nXj7OFS6XJL654AjBABUdg2lraVqzNLOcbq0vos0+VnPLFrZKrZa2bHM1KzeRXK0NZ59arDBtLR3OAQISIDHgApePMO4H3sPXvac9L57ruefeywXl/evsvM/H733e5/k9z8swxyXvhd6Viny3ALMsI4bUGYNd54HF0IsmthdTczHJZiMsVyDS4cZzAsMWGVgLQAii52HAWY+M7406HGMlGAtlPyQARznKALwBwKQ21u+IxOc1GfzXi8VdSDL6+bIB+NBYigMzgQgKYLQCy90efMGAIrWBESkMX9el4XRrIqbovAD0goyNOQN4ckUPYsVJH38ycFEn4IWoElwOBCQggOsV2OSRUSnLEBWlsUkB3zYn40RDCkYn9AEPFRU+hW3L+vB4rhWRYR6vDGOQBIbtC0pwSqvoB4Ccuz34SRGccAs41xGHL2vNGBqNCHWlfD8+ahzPrrRgTeYwwnU3gegEPKIF4QOAwi7LuEAn98hAfZ8JFbVmtAxFz8qxVmhJvBMlKy0oSLFBYLxaJMawSn0dPgDs5aiBjKIumwEVl8w4373wlhxrlVanX0NJoQUZJhfAcDGmFMWKjBfAjWzf3z4chffPLkav3Xv98wIiNUbCW2uvIitulOztVqqDA6A6d3rQr5QaJdxv7fH4qj4N/7nCbwvAHYYJPFXQgweyhtSJaYsWkEQ8wQHYj+IlxnBY64lK7rumZJy8kgxKRvUymySkU0gBdNsMsNh8I0bJtzXPisfyrX6lyQ8t4+WY5/EZB+AsR3WXTVxX2ZDK0WpJRSEdygm6zx1F3Ug2SpRUfMkyYHWIOHIxnecNyQQiJ7JDUd2+rBcZJulMdCnWM+J2ZxrGu22isLsqF3TqjUsG8MTyXh/k5ITK0CROIkJ/s7TUURmfEmCTwngZKuBon2x+czkVp1sSuc39G5qRbpI80T2IYNePosDNUNdtE0EABm/UOt3dtnwrNi3p9yEVNTG1DU+XZ3acM6jMqZYknGhK9uZSQtS4AgA6GSuY4xg2Q8YPWgCKoxTjGCeVexZd85JK94gB7/6eja4RAxfLiHXhnfvbkB47nROUL391LuTk1eeI9MkdNQAwPMrs5XiaAceDASBtCvuBDc3IWngdk26GTy9k4ufWBB/DD+cM4pVVHQjTyWi/tgBlVbn8OrRLDUAGnpkVALWSc1yPPdU5aOjno4B3LUuyY9/6VkRHTGGmw/gBCHUF5EEMc+Ojh5pB1DqbCBB1v/5LLqRJ3YwR4FcQLAm1mq+u7sDmuwem6z5EDvz4dyI+OZ/p55x++CWhtgyVKtBq5yU48Pa6NsQZJvgWsWWgKhh2heO9M9m4MmgMBWC6DElKISJ1GQbS3pJnRWmhBaLeHdA48cDxWjMqG1MC7qsj4CUi+klUbLGLh0MBINmZWI5GtFAdVLkCc4x0k4qpGTUNi0Nv/pobHewKtEcqu+8q1mf9y39Xt9+JA38sDnpq9QYB+ODBZmd+nBTvbUYkcG6f6eCh85mvWTXEEczqrnv/wYbsQb5d1ZaAg3/eNSsAycYx7Fzd8fGaPbZdpOAzkLQdiqg72ZhSoB445wuAMrhuXdpXn71zfIVi128k83hwoXPEIIaaiOYSAWUiWhTrkgRhhpGMUClDKc2EjQMxnM+b+v1LajYA8pMcvI8sTbTzmTDkUKqERT2WU2O51GvCkZpFPo1lJgDUwHYUd6Iw1cYb2JzGcgWE9mFCxKNurYEABGrht/QwUSee9mmmjGlpsRKf82jR/NgzImrHr9t7mqlBBHqcumUGHZO5mOp7/h+n2jKc7+f5/5PdzV9q8kOHAAAAAElFTkSuQmCC"),
		resizable: true,
		webPreferences: {
			nodeIntegration: false
		}
	});

	//mainWindow.webContents.openDevTools();
	mainWindow.loadFile('index.html');
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.whenReady().then(() => {
	createWindow();
});

app.on('activate', () => {
	if (mainWindow === null) createWindow();
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});
