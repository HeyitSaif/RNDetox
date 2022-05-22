detox test -c android.emu.debugD
detox build -c android.emu.debugD

npx uri-scheme open "page://NOTIF" --ios
npx uri-scheme open "page://HOME" --ios