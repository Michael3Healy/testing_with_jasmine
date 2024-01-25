describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server when there is empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should add a table row when a server is added to allServers', function () {
    submitServerInfo();
    updateServerTable();

    const tableData = document.querySelectorAll('#serverTable tbody tr td')

    expect(tableData.length).toEqual(3);
    expect(tableData[0].innerText).toEqual('Alice')
    expect(tableData[1].innerText).toEqual('$0.00')
  })

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
