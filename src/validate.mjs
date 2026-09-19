import fs from 'node:fs'; import {markets,allowedCategories,allowedImportance,allowedChannels} from './catalog.mjs';
export function validate(payload){
 const codes=new Set(markets.map(x=>x.code)); const ids=new Set(); const errors=[];
 for(const [i,e] of (payload.events||[]).entries()){
  for(const k of ['id','country','market','event','category','date','timezone','importance','source','sourceUrl','status']) if(!e[k]) errors.push(`${i}: missing ${k}`);
  if(ids.has(e.id)) errors.push(`${i}: duplicate id ${e.id}`); ids.add(e.id);
  if(!codes.has(e.country)) errors.push(`${i}: unsupported country ${e.country}`);
  if(!allowedCategories.includes(e.category)) errors.push(`${i}: bad category ${e.category}`);
  if(!allowedImportance.includes(e.importance)) errors.push(`${i}: bad importance ${e.importance}`);
  if(!/^https:\/\//.test(e.sourceUrl||'')) errors.push(`${i}: sourceUrl must be https`);
  for(const c of e.transmissionChannels||[]) if(!allowedChannels.includes(c)) errors.push(`${i}: bad channel ${c}`);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(e.date||'')) errors.push(`${i}: bad date`);
 }
 if(errors.length) throw new Error(errors.join('\n')); return true;
}
if(process.argv[1] && process.argv[1].endsWith('validate.mjs')){const p=JSON.parse(fs.readFileSync(new URL('../data/events.json',import.meta.url)));validate(p);console.log(`OK: ${p.events.length} events`)}
