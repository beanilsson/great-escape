var should = require('chai').should(),
    greatEscape = require('../index'),
    escape = greatEscape.escape;

describe('#escape', function() {
    it('converts & into &#38;', function() {
        escape('&').should.equal('&#38;');
    });

    it('converts < into &#60;', function() {
        escape('<').should.equal('&#60;');
    });

    it('converts > into &#62;', function() {
        escape('>').should.equal('&#62;');
    });

    it('converts " into &#34;', function() {
        escape('"').should.equal('&#34;');
    });

    it("converts ' into &#39;", function() {
        escape("'").should.equal('&#39;');
    });

    it("converts ` into &#96;", function() {
        escape('`').should.equal('&#96;');
    });

    it("converts, , into &#32;", function() {
        escape(' ').should.equal('&#32;');
    });

    it("converts ! into &#33;", function() {
        escape('!').should.equal('&#33;');
    });

    it("converts @ into &#64;", function() {
        escape('@').should.equal('&#64;');
    });

    it("converts $ into &#36;", function() {
        escape('$').should.equal('&#36;');
    });

    it("converts % into &#37;", function() {
        escape('%').should.equal('&#37;');
    });

    it("converts ( into &#40;", function() {
        escape('(').should.equal('&#40;');
    });

    it("converts ) into &#41;", function() {
        escape(')').should.equal('&#41;');
    });

    it("converts = into &#61;", function() {
        escape('=').should.equal('&#61;');
    });

    it("converts + into &#43;", function() {
        escape('+').should.equal('&#43;');
    });

    it("converts { into &#123;", function() {
        escape('{').should.equal('&#123;');
    });

    it("converts } into &#125;", function() {
        escape('}').should.equal('&#125;');
    });

    it("converts [ into &#91;", function() {
        escape('[').should.equal('&#91;');
    });

    it("converts ] into &#93;", function() {
        escape(']').should.equal('&#93;');
    });
});
