type OwnProp = {
  horizontal?: string | number;
  vertical?: string | number;
};

export const Space = ({ horizontal, vertical }: OwnProp) => {
  return <div style={{ width: horizontal, height: vertical }} />;
};

export const Input = () => {
  return (
    <div className="form__group field">
      <input type="input" className="form__field" placeholder="Name" />
      <label htmlFor="name" className="form__label">
        Name
      </label>
    </div>
  );
};
