const profile = {
    firstName: 'Yuka',
    familyName: 'Yokomichi',
    age: 20,
    gender: 'female',
    major: 'East Asia',
    hobby: 'Sing',
    job: 'student',
    families: '3 dogs'

}

// console.log(profile.first-name) // 'Yuka'
console.log(profile["first-name"]) // 'Yuka'
const key = 'first-name'
console.log(profile[key])

const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1) {
  const key = keys{i};
  const value = profile[key];
  const text = '私の' + key + 'は、' + value + 'です。'
  console.log(text);
}

for (let key of keys) {
  const value = profile[key];
  const text = "私の" + key + "は、" + value + "です。";
  console.log(text);
}
