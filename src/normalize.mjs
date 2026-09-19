import {createHash} from 'node:crypto';
export function normalizeEvent(e){
  const id=e.id || createHash('sha256').update([e.country,e.date,e.time||'',e.event,e.source].join('|')).digest('hex').slice(0,20);
  return {id,country:e.country,market:e.market,event:e.event,category:e.category,date:e.date,time:e.time??null,timezone:e.timezone,importance:e.importance,transmissionChannels:e.transmissionChannels||[],source:e.source,sourceUrl:e.sourceUrl,status:e.status||'confirmed',notes:e.notes||null,lastChecked:e.lastChecked||new Date().toISOString()};
}
