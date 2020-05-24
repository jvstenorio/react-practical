export default (props) => {
  const elseChild = props.children.filter(
    (child) => child.type && child.type.name === "Else"
  )[0];
  const ifChild = props.children.filter((child) => child !== elseChild);
  return props.test ? ifChild : elseChild || false;
};

export const Else = (props) => props.children;
