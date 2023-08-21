import * as userService from "../../utilities/users-service"

export default function OrderHistoryPage() {
  async function handleChcekToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }
  return (
    <>
    <h1>OrderHistoryPage</h1>
    <button onClick={handleChcekToken}>Check When My Login Expries</button>
    </>
  );
}