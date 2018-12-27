const DOT_REGEX = /《《([^\n]{1,50}?)》》/g
const RUBY_REGEX = /[｜|]([^\n]{1,50}?)《([^\n]{1,20}?)》/g
const KANJI_RUBY_REGEX = /([\u2e80-\u2fdf\u3005\3007\303b\u4e00-\u9faf\u3400-\u4dbf\uf900-\ufaff]{1,50}?)《([^\n]{1,20}?)》/g

module.exports = function transformKakuyomuNotation (text) {
  text = text.replace(DOT_REGEX, function (match, p1){
    const text = [...p1].map(a => `<span>${a}</span>`).join('')
    return `<em class="emphasis">${text}</em>`
  })
  text = text.replace(RUBY_REGEX, function (match, p1, p2){
    return `<ruby><rb>${p1}</rb><rt>${p2}</rt></ruby>`
  })
  text = text.replace(KANJI_RUBY_REGEX, function (match, p1, p2){
    return `<ruby><rb>${p1}</rb><rt>${p2}</rt></ruby>`
  })
  return text
}

