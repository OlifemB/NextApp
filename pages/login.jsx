import Link from "next/link";

export default function Login() {
  return (
    <main>
      <div className={`container`}>
        <Link href="/"><a>Back</a></Link>
        <form>
          <label htmlFor="login">
            <input type="text" id="login" placeholder="login" />
          </label>

          <label htmlFor="password">
            <input type="password" id="password" placeholder="password" />
          </label>
        </form>
      </div>
    </main>
  );
}
