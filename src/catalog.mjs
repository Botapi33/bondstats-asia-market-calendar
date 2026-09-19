export const markets = [
  {code:'CN',name:'China',tz:'Asia/Shanghai',institutions:['PBoC','NBS China']},
  {code:'HK',name:'Hong Kong',tz:'Asia/Hong_Kong',institutions:['HKMA','C&SD Hong Kong']},
  {code:'SG',name:'Singapore',tz:'Asia/Singapore',institutions:['MAS','SingStat','MTI Singapore']},
  {code:'JP',name:'Japan',tz:'Asia/Tokyo',institutions:['Bank of Japan','Statistics Bureau Japan','MOF Japan']},
  {code:'KR',name:'South Korea',tz:'Asia/Seoul',institutions:['Bank of Korea','KOSTAT']},
  {code:'IN',name:'India',tz:'Asia/Kolkata',institutions:['RBI','MOSPI']},
  {code:'AU',name:'Australia',tz:'Australia/Sydney',institutions:['RBA','ABS']},
  {code:'NZ',name:'New Zealand',tz:'Pacific/Auckland',institutions:['RBNZ','Stats NZ']}
];
export const allowedCategories=['monetary-policy','inflation','growth','activity','labour','trade','liquidity','reserves','sovereign-funding','market-closure'];
export const allowedImportance=['high','medium','low'];
export const allowedChannels=['RATES','FX','SOVEREIGN_CURVE','LIQUIDITY','CREDIT','EQUITIES'];
