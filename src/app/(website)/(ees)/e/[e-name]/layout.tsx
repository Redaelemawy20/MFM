import ReactNode from "react";
// the layout of the entity

// fetch it's navbar and news footer
interface EntiyPageLayoutProps {
  children: React.ReactNode;
}
export default ({ children }: EntiyPageLayoutProps) => {
  return (
    <div>
      nav of the fc
      <div>{children}</div>
    </div>
  );
};
