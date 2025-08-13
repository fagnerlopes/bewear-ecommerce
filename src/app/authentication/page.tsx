import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SignUpForm from "./components/sign-up-form";
import SignInForm from "./components/sign-in-form";
import { Header } from "@/components/common/header";

const Authentication = () => {
  return (
    <>
      <Header />

      <div className="flex w-full flex-col gap-6 p-5">
        <Tabs defaultValue="sign-in">
          <TabsList>
            <TabsTrigger value="sign-in">Entrar</TabsTrigger>
            <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in" className="w-full">
            <SignInForm />
          </TabsContent>
          <TabsContent value="sign-up" className="w-full">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Authentication;
