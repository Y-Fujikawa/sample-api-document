FORMAT: 1A

# Group User

## ユーザリスト取得 [/v1/user/list]

### ユーザリスト取得 [POST]

#### 処理概要

* ユーザ情報を取得する。
* 取得が成功した場合、取得結果をすべて返す。

+ Request (application/json)

    + Headers

            x-sample-api-access-token: xx

+ Response 201 (application/json)

    + Attributes
        + result_code: 0 (enum, required) - 返却値(0:OK, 1:NG)
                + 0 (number)
                + 1 (number)
        + user_list (array)
            + (object)
                + id: 1234 (number, required)
                + first_name: Taro (string, required)
                + last_name: Yamada (string, required)
            + (object)
                + id: 2345 (number, required)
                + first_name: Hajime (string, required)
                + last_name: Tanaka (string, required)

+ Response 400 (application/json)

    + Attributes
        + result_code: 1 (enum, required) - 返却値(0:OK, 1:NG)
                + 0 (number)
                + 1 (number)
        + error_message: データが取得できませんでした。 (string, required)


# Group Admin

## 商品リスト取得 [/v1/admin/item/list]

### 商品リスト取得 [POST]

#### 処理概要

* 商品情報を取得する。
* 取得が成功した場合、取得結果をすべて返す。

+ Request (application/json)

    + Headers

            x-sample-api-access-token: xx

+ Response 201 (application/json)

    + Attributes
        + result_code: 0 (enum, required) - 返却値(0:OK, 1:NG)
                + 0 (number)
                + 1 (number)
        + item_list (array)
            + (object)
                + id: 9876 (number, required)
                + name: りんご (string, required)
                + stock: 100 (number, required)
            + (object)
                + id: 8765 (number, required)
                + name: バナナ (string, required)
                + stock: 0 (number, required)

+ Response 400 (application/json)

    + Attributes
        + result_code: 1 (enum, required) - 返却値(0:OK, 1:NG)
                + 0 (number)
                + 1 (number)
        + error_message: データが取得できませんでした。 (string, required)

