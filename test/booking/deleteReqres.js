const assert = require("assert");

describe('DELETE Reqres API', function () {

    it('delete data', async function () {
        this.timeout(10000);
        const url = 'https://reqres.in/api/users/2';

        const response = await fetch(url, {
            method: "DELETE"
        });

        // Pastikan status code adalah 204 (No Content)
        assert.strictEqual(response.status, 204, "Status harus 204");

        // Reqres API tidak mengembalikan body untuk DELETE, jadi tidak perlu memeriksa response JSON
        console.log("Data berhasil dihapus, status:", response.status);
    });
});