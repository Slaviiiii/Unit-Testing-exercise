function requestValidator(obj) {
  let allMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
  let allVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  let uriRegex = /^([\w\.]+|\*)$/g;

  if (!obj.hasOwnProperty('method')) {
    throw new Error(`Invalid request header: Invalid Method`);
  } else {
    if (!allMethods.includes(obj.method)) {
      throw new Error(`Invalid request header: Invalid Method`);
    }
  }

  if (!obj.hasOwnProperty('uri')) {
    throw new Error('Invalid request header: Invalid URI');
  } else {
    if (obj.uri !== '*') {
      if (uriRegex.test(obj.uri) === false) {
        throw new Error('Invalid request header: Invalid URI');
      }
    }
  }

  if (!obj.hasOwnProperty('version')) {
    throw new Error(`Invalid request header: Invalid Version`);
  } else {
    if (!allVersions.includes(obj.version)) {
      throw new Error(`Invalid request header: Invalid Version`);
    }
  }

  let messageRegex = /^[^<>\\&'"]*$/g;

  if (!obj.hasOwnProperty('message')) {
    throw new Error(`Invalid request header: Invalid Message`);
  } else {
    if (obj.message !== '') {
      if (messageRegex.test(obj.message) === false) {
        throw new Error(`Invalid request header: Invalid Message`);
      }
    }
  }

  return obj;
}