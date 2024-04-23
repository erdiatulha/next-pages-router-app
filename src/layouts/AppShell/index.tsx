import Navbar from "@/components/organisms/Navbar";
import { monserratFont } from "@/helpers/customFonts";

type AppShellProps = {
  children: React.ReactNode;
};
const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main className={`${monserratFont.className}`}>
      <Navbar />
      {children}
    </main>
  );
};

export default AppShell;
