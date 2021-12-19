/**
 * @function Generate
 * @param  {string} [formatOption="default"] - 'digits' | 'checker' | 'default'
 *
 * @returns {string}                  Valid and formatted CPF
 */
export declare const generate: ({ format }?: {
    format?: boolean;
}) => string;
/**
 * @function Validate
 * @param  {string} value  CPF number
 *
 * @returns {boolean}                true = valid || false = invalid
 */
export declare const validate: (value: string) => boolean;
