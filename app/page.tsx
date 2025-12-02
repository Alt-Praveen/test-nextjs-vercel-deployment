import MainPage from ".";

export default function Home() {
  const getEnvVar = process.env.TEST_VARIABLE
  console.log("TEST_VARIABLE in env file => ", getEnvVar);
  const getClientVar = process.env.CLIENT_VAR
  console.log("CLIENT_VAR in env file => ", getClientVar);

  return (
    <MainPage envVar={getEnvVar} clientVar={getClientVar} />
  );
}
