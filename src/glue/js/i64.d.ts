/**
 * @fileoverview 64-bit integer glue code for TypeScript.
 * @license Apache-2.0
 */

declare type i64 = { __Long__: true }; // opaque

declare const i64_zero: i64;
declare const i64_one: i64;
declare const i64_neg_one: i64;
declare const i64_minimum: i64;
declare const i64_maximum: i64;

declare function i64_is(value: unknown): value is i64;
declare function i64_new(lo: i32, hi?: i32): i64;
declare function i64_low(value: i64): i32;
declare function i64_high(value: i64): i32;

declare function i64_not(value: i64): i64;
declare function i64_neg(value: i64): i64;
declare function i64_clz(value: i64): i32;
declare function i64_ctz(value: i64): i32;

declare function i64_add(left: i64, right: i64): i64;
declare function i64_sub(left: i64, right: i64): i64;
declare function i64_mul(left: i64, right: i64): i64;
declare function i64_pow(left: i64, right: i64): i64;
declare function i64_div(left: i64, right: i64): i64;
declare function i64_div_u(left: i64, right: i64): i64;
declare function i64_rem(left: i64, right: i64): i64;
declare function i64_rem_u(left: i64, right: i64): i64;
declare function i64_and(left: i64, right: i64): i64;
declare function i64_or(left: i64, right: i64): i64;
declare function i64_xor(left: i64, right: i64): i64;
declare function i64_shl(left: i64, right: i64): i64;
declare function i64_shr(left: i64, right: i64): i64;
declare function i64_shr_u(left: i64, right: i64): i64;

declare function i64_eq(left: i64, right: i64): boolean;
declare function i64_ne(left: i64, right: i64): boolean;
declare function i64_ge(left: i64, right: i64): boolean;
declare function i64_ge_u(left: i64, right: i64): boolean;
declare function i64_gt(left: i64, right: i64): boolean;
declare function i64_gt_u(left: i64, right: i64): boolean;
declare function i64_le(left: i64, right: i64): boolean;
declare function i64_le_u(left: i64, right: i64): boolean;
declare function i64_lt(left: i64, right: i64): boolean;
declare function i64_lt_u(left: i64, right: i64): boolean;

declare function i64_align(value: i64, alignment: i32): i64;
declare function i64_signbit(value): boolean;

declare function i64_is_i8(value: i64): boolean;
declare function i64_is_i16(value: i64): boolean;
declare function i64_is_i32(value: i64): boolean;
declare function i64_is_u8(value: i64): boolean;
declare function i64_is_u16(value: i64): boolean;
declare function i64_is_u32(value: i64): boolean;
declare function i64_is_bool(value: i64): boolean;
declare function i64_is_f32(value: i64): boolean;
declare function i64_is_f64(value: i64): boolean;

declare function i64_to_f32(value: i64): f64;
declare function i64_to_f64(value: i64): f64;
declare function i64_to_string(value: i64, unsigned?: boolean): string;
declare function i64_clone(value: i64): i64;
