# sample-api-document
APIドキュメントのサンプル
## Install
```shell
$ npm intall
```

## Usage
### gulp
Exec gulp task.
```shell
$ node_modules/.bin/gulp
```

See. http://localhost:8088/

Write or Rewrite API document, Auto reload browser.

### Mock server
Exec drakov
```shell
node_modules/.bin/drakov -f "./index.md" --watch --public
```

Exec cURL command.
```shell
curl -XPOST -H "x-sample-api-access-token: xx" -H "Content-Type: application/json" http://localhost:3000/v1/user/list
curl -XPOST -H "x-sample-api-access-token: xx" -H "Content-Type: application/json" http://localhost:3000/v1/admin/item/list
```
