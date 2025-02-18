const assert = require("assert");

describe('PATCH Reqres API', function () {

    it('update data', async function () {
        this.timeout(10000);
        const url = 'https://reqres.in/api/users/2';
        const requestData = {
            name: "Nabila Asshafa Putri"
        };

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

        // Untuk mencetak response API (Debugging)
        console.log("Response:", JSON.stringify(Responsedata, null, 2));

        // Pastikan status code adalah 200 (update)
        assert.strictEqual(response.status, 200, "Status harus 200");

        // Pastikan response memiliki 'name' yang diperbarui
        assert.strictEqual(Responsedata.name, "Nabila Asshafa Putri", "Nama harus 'Nabila Asshafa Putri'");

        // Pastikan response memiliki 'updatedAt'
        assert.ok(Responsedata.updatedAt, "Response harus memiliki 'updatedAt'");
    });
});
