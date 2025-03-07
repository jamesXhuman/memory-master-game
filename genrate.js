module.exports = async function (context, req) {
    const offset = Math.floor(Math.random() * 0x80);
    const vpn = Math.floor(Math.random() * 0x40);
    const virtualAddr = (vpn << 7) | offset;
    const pageTable = {};
    for (let i = 0; i < 5; i++) {
      pageTable[Math.floor(Math.random() * 0x40)] = Math.floor(Math.random() * 0x80);
    }
    pageTable[vpn] = Math.floor(Math.random() * 0x80);
    const pfn = pageTable[vpn];
    const physicalAddr = (pfn << 7) | offset;
    context.res = {
      body: {
        virtualAddr,
        pageSizeBits: 7,
        pageTable,
        solution: [vpn, offset, pfn, physicalAddr]
      }
    };
  };