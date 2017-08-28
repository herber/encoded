import test from 'ava';
import encoded from '.';

test('encodes', t => {
  t.is(encoded.encode('The inventory of a replace becomes a jiggly beaver.'), 'VGhlIGludmVudG9yeSBvZiBhIHJlcGxhY2UgYmVjb21lcyBhIGppZ2dseSBiZWF2ZXIu');
  t.is(encoded.encode('A bookless halibut without bonsais is truly a soybean of pesky suedes.', 'base64'), 'QSBib29rbGVzcyBoYWxpYnV0IHdpdGhvdXQgYm9uc2FpcyBpcyB0cnVseSBhIHNveWJlYW4gb2YgcGVza3kgc3VlZGVzLg==');
});

test('decodes', t => {
  t.is(encoded.decode('VG8gYmUgbW9yZSBzcGVjaWZpYywgdGhlIHN0cmVhbXMgY291bGQgYmUgc2FpZCB0byByZXNlbWJsZSBjaGFuZ2luZyBjaGVtaXN0cmllcy4='), 'To be more specific, the streams could be said to resemble changing chemistries.');
  t.is(encoded.decode('QSBtaW5lIGlzIGEgY2FwdGlvbidzIGNvbXBldGl0aW9uLg', 'base64'), "A mine is a caption's competition.");
});
