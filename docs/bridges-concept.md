---
id: bridges-concept
title: Concept
---

To make use of any schema, uniforms have to create a _bridge_ of it - a unified schema mapper. A bridge is (preferably) a subclass of `Bridge`, implementing static `check(schema)` method and these instance methods:

- `getError(name, error)`
- `getErrorMessage(name, error)`
- `getErrorMessages(error)`
- `getField(name)`
- `getInitialValue(name, props)`
- `getProps(name, props)`
- `getSubfields(name)`
- `getType(name)`
- `getValidator(options)`

Currently built-in bridges:

- `GraphQLBridge`
- `SimpleSchemaBridge`
- `SimpleSchema2Bridge`

**Note:** To read more see [API](https://github.com/vazco/uniforms/blob/master/API.md#bridge) and [`Bridge`](https://github.com/vazco/uniforms/blob/master/packages/uniforms/src/Bridge.js).

## Example: `MyLittleSchema`

**Note:** This is a very basic schema just to show how it works and how you can create your own schema bridges.

```js
import Bridge from 'uniforms/Bridge';

class MyLittleSchema extends Bridge {
  constructor(schema, validator) {
    super();

    this.schema = schema;
    this.validator = validator;
  }

  getError(name, error) {
    return error && error[name];
  }

  getErrorMessage(name, error) {
    return error && error[name];
  }

  getErrorMessages(error) {
    return error ? Object.keys(this.schema).map(field => error[field]) : [];
  }

  getField(name) {
    return this.schema[name.replace(/\.\d+/g, '.$')];
  }

  getType(name) {
    return this.schema[name.replace(/\.\d+/g, '.$')].__type__;
  }

  getProps(name) {
    return this.schema[name.replace(/\.\d+/g, '.$')];
  }

  getInitialValue(name) {
    return this.schema[name.replace(/\.\d+/g, '.$')].initialValue;
  }

  getSubfields(name) {
    return name
      ? this.schema[name.replace(/\.\d+/g, '.$')].subfields || []
      : Object.keys(this.schema).filter(field => field.indexOf('.') === -1);
  }

  getValidator() {
    return this.validator;
  }
}

const bridge = new MyLittleSchema(
  {
    login: {
      __type__: String,
      required: true,
      initialValue: '',
      label: 'Login'
    },
    password1: {
      __type__: String,
      required: true,
      initialValue: '',
      label: 'Password'
    },
    password2: {
      __type__: String,
      required: true,
      initialValue: '',
      label: 'Password (again)'
    }
  },
  model => {
    const error = {};

    if (!model.login) {
      error.login = 'Login is required!';
    } else if (model.login.length < 5) {
      error.login = 'Login has to be at least 5 characters long!';
    }

    if (!model.password1) {
      error.password1 = 'Password is required!';
    } else if (model.password1.length < 10) {
      error.login = 'Password has to be at least 10 characters long!';
    }

    if (model.password1 !== model.password2) {
      error.password1 = 'Passwords mismatch!';
    }

    if (Object.keys(error).length) {
      throw error;
    }
  }
);

<AutoForm schema={bridge} />;
```