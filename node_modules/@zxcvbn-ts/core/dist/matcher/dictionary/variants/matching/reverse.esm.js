/*
 * -------------------------------------------------------------------------------
 *  Dictionary reverse matching --------------------------------------------------
 * -------------------------------------------------------------------------------
 */
class MatchL33t {
  constructor(defaultMatch) {
    this.defaultMatch = defaultMatch;
  }

  match({
    password
  }) {
    const passwordReversed = password.split('').reverse().join('');
    return this.defaultMatch({
      password: passwordReversed
    }).map(match => ({ ...match,
      token: match.token.split('').reverse().join(''),
      reversed: true,
      // map coordinates back to original string
      i: password.length - 1 - match.j,
      j: password.length - 1 - match.i
    }));
  }

}

export { MatchL33t as default };
//# sourceMappingURL=reverse.esm.js.map
