
export type HeadingProps  = {
  name?: string;
}

function Heading({ name = 'world' }: HeadingProps) {
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );  
}

export default Heading;
