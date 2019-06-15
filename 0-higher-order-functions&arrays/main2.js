const mans = [
  { name: "Joen", sex: "m", hight: "1.67" },
  { name: "Carl", sex: "s", hight: "1.77" },
  { name: "Sagan", sex: "d", hight: "1.68" },
  { name: "Mentos", sex: "s", hight: "1.97" },
  { name: "Ogros", sex: "r", hight: "1.61" },
  { name: "Ularr", sex: "r", hight: "1.57" },
  { name: "Micha", sex: "r", hight: "1.66" },
  { name: "Donatos", sex: "d", hight: "1.77" },
  { name: "Zibrov", sex: "m", hight: "1.68" },
  { name: "Mucla", sex: "m", hight: "1.66" }
];

//forEach

// mans.forEach(man =>
//   console.log(`${man.name} have ${man.sex} of close hights ${man.hight}`)
// );

//filter
const sexM = mans.filter(man => man.sex === "s");

sexM.forEach(sexm => console.log(`${sexm.name} has sex ${sexm.sex}`));

// sort
const hightM = mans
  .filter(man => man.hight <= "1.67")
  .sort((a, b) => a.hight - b.hight);

hightM.forEach(hightm =>
  console.log(`${hightm.name} has hight ${hightm.hight}`)
);

// map
const manNames = mans.map(man => man.name);
console.log(manNames);

const manWeight = mans.map(man => Math.round((man.hight - 1) * 100));

console.log(manWeight);

// reduce
const busWeight = manWeight.reduce((manW, total) => manW + total, 0);

console.log(busWeight);
