import MainPage from ".";

export default function Home() {
  const getEnvVar = process.env.TEST_VARIABLE
  console.log("TEST_VARIABLE in env file => ", getEnvVar);

  return (
    <MainPage envVar={getEnvVar} />
  );
}
