# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'ieee80211.ui'
#
# Created by: PyQt4 UI code generator 4.12.1
#
# WARNING! All changes made in this file will be lost!


from PyQt4 import QtCore, QtGui
from wifi_rx import wifi_rx
from wifi_rx.wifi_rx import main 
from PyQt4 import Qt
from PyQt4.QtCore import QObject, pyqtSlot
from gnuradio import blocks
from gnuradio import eng_notation
from gnuradio import fft
from gnuradio import gr
from gnuradio import qtgui
from gnuradio.eng_option import eng_option
from gnuradio.fft import window
from gnuradio.filter import firdes
from gnuradio.qtgui import Range, RangeWidget
from optparse import OptionParser
import ieee802_11
import os
import osmosdr
import sip
import sys
import time
from gnuradio import qtgui

try:
    _fromUtf8 = QtCore.QString.fromUtf8
except AttributeError:
    def _fromUtf8(s):
        return s

try:
    _encoding = QtGui.QApplication.UnicodeUTF8
    def _translate(context, text, disambig):
        return QtGui.QApplication.translate(context, text, disambig, _encoding)
except AttributeError:
    def _translate(context, text, disambig):
        return QtGui.QApplication.translate(context, text, disambig)

class Ui_MainWindow(object):
    def runapplication(self):
           wifi_rx.wifi_rx()
    def setupUi(self, MainWindow):
        MainWindow.setObjectName(_fromUtf8("MainWindow"))
        MainWindow.resize(736, 584)
        self.centralwidget = QtGui.QWidget(MainWindow)
        self.centralwidget.setObjectName(_fromUtf8("centralwidget"))
        self.ScanWifi = QtGui.QPushButton(self.centralwidget)
        self.ScanWifi.setGeometry(QtCore.QRect(300, 240, 133, 60))
        icon = QtGui.QIcon()
        icon.addPixmap(QtGui.QPixmap(_fromUtf8("wifi.png")), QtGui.QIcon.Normal, QtGui.QIcon.Off)
        self.ScanWifi.setIcon(icon)
        self.ScanWifi.setIconSize(QtCore.QSize(50, 50))
        self.ScanWifi.setObjectName(_fromUtf8("ScanWifi"))
        self.ScanWifi.clicked.connect(self.runapplication)
        self.Salir = QtGui.QPushButton(self.centralwidget)
        self.Salir.setGeometry(QtCore.QRect(590, 480, 97, 27))
        self.Salir.setObjectName(_fromUtf8("Salir"))
        self.Salir.clicked.connect(self.cerrar_aplicacion)
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QtGui.QMenuBar(MainWindow)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 736, 25))
        self.menubar.setObjectName(_fromUtf8("menubar"))
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QtGui.QStatusBar(MainWindow)
        self.statusbar.setObjectName(_fromUtf8("statusbar"))
        MainWindow.setStatusBar(self.statusbar)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(_translate("MainWindow", "Escuela de Telecomunicaciones", None))
        MainWindow.setWindowIcon(QtGui.QIcon('loguc.ico')) 
	self.ScanWifi.setText(_translate("MainWindow", "Scan Wifi", None))
        self.Salir.setText(_translate("MainWindow", "Salir", None))
    
    def cerrar_aplicacion(self):
         sys.exit()
    
        

if __name__ == "__main__":
    import sys
    app = QtGui.QApplication(sys.argv)
    MainWindow = QtGui.QMainWindow()
    ui = Ui_MainWindow()
    ui.setupUi(MainWindow)
    MainWindow.show()
    sys.exit(app.exec_())
