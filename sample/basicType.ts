function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

interface TestConfig {
  name: string;
}

interface TestConfig {
  value: string;
}

const testConfig: TestConfig = {
  name: "test",
  value: "test",
};
