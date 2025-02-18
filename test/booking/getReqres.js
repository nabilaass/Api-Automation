const assert = require("assert");

describe('GET Reqres API', function () {

    it('Get Data', async function () {
        this.timeout(10000);
        const response = await fetch('https://reqres.in/api/users/2');

        const Responsedata = await response.json();

        //cetak response API
        console.log("Response : ", JSON.stringify(Responsedata, null, 2));

        assert.strictEqual(response.status, 200, "Status harus 200");
    });

    it('ketika user tidak ditemukan', async function () {
        this.timeout(10000);
        const response = await fetch('https://reqres.in/api/users/2222');

        assert.strictEqual(response.status, 404, "Status harus 404");

        const responseJson = await response.json();
        console.log("Response (JSON) : ", JSON.stringify(responseJson, null, 2));

        assert.deepStrictEqual(responseJson, {}, "Response harus objek kosong {}");
    });

});
