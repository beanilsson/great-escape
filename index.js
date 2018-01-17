/**
 * Replace special characters within an HTML string with their corresponding HTML numbers
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
    escape: function(html) {
        return String(html)
            .replace(/&/g, '&#38;')
            .replace(/</g, '&#60;')
            .replace(/>/g, '&#62;')
            .replace(/"/g, '&#34;')
            .replace(/'/g, '&#39;')
            .replace(/`/g, '&#96;')
            .replace(/ /g, '&#32;')
            .replace(/!/g, '&#33;')
            .replace(/@/g, '&#64;')
            .replace(/\$/g, '&#36;')
            .replace(/%/g, '&#37;')
            .replace(/\(/g, '&#40;')
            .replace(/\)/g, '&#41;')
            .replace(/=/g, '&#61;')
            .replace(/\+/g, '&#43;')
            .replace(/{/g, '&#123;')
            .replace(/}/g, '&#125;')
            .replace(/\[/g, '&#91;')
            .replace(/\]/g, '&#93;');
    }
};
