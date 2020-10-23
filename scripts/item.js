const validateName = function (name) {
  if(name=== '' || name === ' ')throw new TypeError("Name must not be blank");
};

const create = function (name) {
  return { id: cuid(), name: name, checked: false };
};

export default {
  validateName,
  create,
};
