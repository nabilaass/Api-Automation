const assert = require("assert");

describe('CREATE Reqres API', function () {

    it('Create data', async function () {
        this.timeout(10000);
        const url = 'https://reqres.in/api/users';
        const requestData = {
            name: "Nabila",
            job: "QA"
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

        // Untuk mencetak response API (Debugging)
        console.log("Response:", JSON.stringify(Responsedata, null, 2));

        // Pastikan status code adalah 201 (Created)
        assert.strictEqual(response.status, 201, "Status harus 201");

        // Pastikan response memiliki field 'name' dan 'job'
        assert.strictEqual(Responsedata.name, "Nabila", "Nama harus 'Nabila'");
        assert.strictEqual(Responsedata.job, "QA", "Job harus 'QA'");

        assert.ok(Responsedata.id, "Response harus memiliki 'id'");
        assert.ok(Responsedata.createdAt, "Response harus memiliki 'createdAt'");
    });
});
