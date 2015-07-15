# Regex Workshop
Regular expressions workshop

## Introduction

What the h*ll is this:

```
/^([a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})(, ?([a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}))*?$/
```

Or this?
```
/^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/
```

But that’s easy – right?
```
/^([0-9]{5}(-[0-9]{4})?|[A-Z]\d[A-Z]((\s|\-)?\d[A-Z]\d)?)$/i
```

```
/^\/\^?([^\/]|\\\/)+\$?\/([gimsx]{0,5})?$/
```

> “ Those are regular expressions. Regular expressions are our friends. They’re neither evil nor do they hurt humans. They require good care, occasional petting and a bit of grooming – but are easy to deal with besides that. ”

Quite a few people have some sort of a rough idea what regular expressions do, what they’re useful for and why really every developer should at least have an idea of using RegExps (as care-takers call them). For web developers **regular expressions could be used everywhere**:
- form field data validation (either on the client with JavaScript or Flash/Flex or on pretty much any backend from CF via PHP to Java or Ruby)
- text pattern recognition
- URL rewrite rules with Apache or IIS
- powerful replace feature in you text editor
- and many more.

### Definitions of regular expressions

** Regular expressions are patterns used to match character combinations in strings. **

Regular expression (abbreviated regex or regexp) is a **sequence of characters** that define a search pattern, mainly for use in pattern matching with strings, or string matching, i.e. "find and replace"-like operations. The concept arose in the 1950s, when the American mathematician Stephen Kleene formalized the description of a regular language, and came into common use with the Unix text processing utilities ed, an editor, and grep (global regular expression print), a filter.

Regular expressions are so useful in computing that the various systems to specify regular expressions have evolved to provide both a basic and extended standard for the grammar and syntax; modern regular expressions heavily augment the standard. Regular expression processors are found in several search engines, search and replace dialogs of several word processors and text editors, and in the command lines of text processing utilities, such as sed and AWK.

Many programming languages provide regular expression capabilities, some built-in, for example Perl, JavaScript, Ruby, AWK, and Tcl, and others via a standard library, for example .NET languages, Java, Python and C++ (since C++11). Most other languages offer regular expressions via a library.

** PATTERN **

Each character in a regular expression is either understood to be a **metacharacter** with its special meaning, or a regular character with its literal meaning. Together, they can be used to identify textual material of a given pattern, or process a number of instances of it that can vary from a precise equality to a very general similarity of the pattern.

### Basic concepts

**Boolean "or"**

A vertical bar separates alternatives. For example, gray|grey can match "gray" or "grey".

**Grouping**

Parentheses "()" are used to define the scope and precedence of the operators (among other uses). For example, ```gray|grey``` and ```gr(a|e)y``` are equivalent patterns which both describe the set of "gray" or "grey".

**Quantification**

A quantifier after a token (such as a character) or group specifies how often that preceding element is allowed to occur. The most common quantifiers are:


- ```?``` The question mark indicates there is zero or one of the preceding element. For example, ```colou?r``` matches both "color" and "colour".
- ```*``` The asterisk indicates there is zero or more of the preceding element. For example, ```ab*c``` matches "ac", "abc", "abbc", "abbbc", and so on.
- ```+``` The plus sign indicates there is one or more of the preceding element. For example, ```ab+c``` matches "abc", "abbc", "abbbc", and so on, but not "ac".

More advanced concepts (https://en.wikipedia.org/wiki/Regular_expression)

| MetaChar     | Meaning     |
| :------------- | :------------- |
| ```.```   | Matches any single character (many applications exclude newlines, and exactly which characters are considered newlines is flavor-, character-encoding-, and platform-specific, but it is safe to assume that the line feed character is included). Within POSIX bracket expressions, the dot character matches a literal dot. For example, ```a.c``` matches "abc", etc., but ```[a.c]``` matches only "a", ".", or "c".       |
| ``[]``    | A bracket expression. Matches a single character that is contained within the brackets. For example, ```[abc]``` matches "a", "b", or "c". ```[a-z]``` specifies a range which matches any lowercase letter from "a" to "z". These forms can be mixed: ```[abcx-z]``` matches "a", "b", "c", "x", "y", or "z", as does ```[a-cx-z]```. |

Escaping of special characters is done by backslash, eg. “\(in bracket\)”.

| MetaChar     | Meaning     |
| :------------- | :------------- |
| Item One       | Item Two       |

To be continued...
