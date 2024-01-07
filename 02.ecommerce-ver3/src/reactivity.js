export function bindReactiveState({ name, defaultValue }) {
  if (typeof defaultValue !== "object") {
    throw new Error("bindReactiveState supprots only object as default value.");
  }

  let value = defaultValue;

  const getter = () => {
    return value;
  };

  const setter = (newValue) => {
    const oldKeys = Object.keys(value);
    const newKeys = Object.keys(newValue);
    const removedKeys = [];
    const changedKeys = [];
    newKeys.forEach((key) => {
      if (value[key] !== newValue[key]) {
        changedKeys.push(key);
      }
    });
    newKeys.forEach((key) => {
      if (!oldKeys.includes(key)) {
        changedKeys.push(key);
      }
    });

    const uniqueChangedKeys = Array.from(new Set(changedKeys));
    console.log(uniqueChangedKeys);
    uniqueChangedKeys.forEach((key) => {
      const elements = Array.from(
        document.querySelectorAll(
          `[data-subscribe-to="${name}"][data-subscription-path="${key}"]`
        )
      );
      elements.forEach((element) => {
        if (element.tagName === "INPUT") {
          element.value = newValue[key];
        }
        element.innerHTML = newValue[key];
      });
    });

    value = newValue;
  };

  return [getter, setter];
}
