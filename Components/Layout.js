import { ApiUrl } from '../next.config';

export default function Layout({ children }) {
    return (
      <>
        <main>
            {children}
        </main>
      </>
    )
}