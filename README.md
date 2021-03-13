# vf2

vue&firebase 2

# install

## firebase use

```bash
$ firebase login # If you are not logged in
$ firebase use --add
? Which project do you want to add? xxx-site
? What alias do you want to use for this project? (e.g. staging) default

Created alias default for xxx-site.
Now using alias default (xxx-site)
```

## functions

### key download

functions/key.json download from console service account key

### setting

```bash
$ firebase functions:config:set admin.email=xx@abc.com admin.db_url=https://xxx-site.firebaseio.com admin.region=asia-northeast1 admin.bucket_url=xxx.appspot.com
```

## hosting

### Dependecies install

Dependencies installation

```bash
$ yarn # front-end install
$ cd functions && yarn # back-end install
$ cd ..
```

### firebaseConfig file make

make file on root

**./firebaseConfig.js**  
```javascript
export default {
  apiKey: "apiKey",
  authDomain: "xxx-site.firebaseapp.com",
  databaseURL: "https://xxx-site.firebaseio.com",
  projectId: "xxx-site",
  storageBucket: "xxx-site.appspot.com",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId"
}
```