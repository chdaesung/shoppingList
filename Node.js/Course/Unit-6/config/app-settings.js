/*
   Copyright 2018 Makoto Consulting Group, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
'use strict'

/**
 * appSettings - all relative to the project root
 */
const appSettings = {
    db_file_name : '../data/shopping-list.db',
    create_sql : {
        item : './scripts/item.sql',
        brand : './scripts/brand.sql',
        shopping_list : './scripts/shopping_list.sql',
        shopping_list_item : './scripts/shopping_list_item.sql'
    },
    brand_file_name : '../data/smallGrocery_Brands_Database.csv',
    item_file_name : '../data/smallGrocery_UPC_Database.csv',

    server_host : 'localhost',
    server_listen_port : 8080,
};

module.exports = appSettings;
