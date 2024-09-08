import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const Controls = ({
  fontSize,
  setFontSize,
  lineHeight,
  setLineHeight,
  letterSpacing,
  setLetterSpacing,
  paragraphIndent,
  setParagraphIndent,
  fontWeight,
  setFontWeight,
  textAlign,
  setTextAlign,
  textCase,
  setTextCase,
  textDirection,
  setTextDirection
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="letter-spacing">Letter Spacing: {letterSpacing}px</Label>
        <Slider
          id="letter-spacing"
          min={-5}
          max={10}
          step={0.5}
          value={[letterSpacing]}
          onValueChange={(value) => setLetterSpacing(value[0])}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="paragraph-indent">Paragraph Indent: {paragraphIndent}px</Label>
        <Slider
          id="paragraph-indent"
          min={0}
          max={100}
          step={1}
          value={[paragraphIndent]}
          onValueChange={(value) => setParagraphIndent(value[0])}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="font-size">Font Size: {fontSize}px</Label>
        <Slider
          id="font-size"
          min={8}
          max={72}
          step={1}
          value={[fontSize]}
          onValueChange={(value) => setFontSize(value[0])}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="line-height">Line Height: {lineHeight}</Label>
        <Slider
          id="line-height"
          min={1}
          max={3}
          step={0.1}
          value={[lineHeight]}
          onValueChange={(value) => setLineHeight(value[0])}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Label htmlFor="font-weight">Font Weight:</Label>
        <Select value={fontWeight} onValueChange={setFontWeight}>
          <SelectTrigger id="font-weight">
            <SelectValue placeholder="Select weight" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="bold">Bold</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Label htmlFor="text-case">Text Case:</Label>
        <Select value={textCase} onValueChange={setTextCase}>
          <SelectTrigger id="text-case">
            <SelectValue placeholder="Select case" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Normal</SelectItem>
            <SelectItem value="uppercase">UPPERCASE</SelectItem>
            <SelectItem value="lowercase">lowercase</SelectItem>
            <SelectItem value="capitalize">Capitalize</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Label htmlFor="text-direction">Text Direction:</Label>
        <Select value={textDirection} onValueChange={setTextDirection}>
          <SelectTrigger id="text-direction">
            <SelectValue placeholder="Select direction" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ltr">Left to Right</SelectItem>
            <SelectItem value="rtl">Right to Left</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Label htmlFor="hanging-punctuation">Hanging Punctuation:</Label>
        <Switch id="hanging-punctuation" />
      </div>

      <div className="flex items-center space-x-2">
        <Label htmlFor="hanging-lists">Hanging Lists:</Label>
        <Switch id="hanging-lists" />
      </div>

      <div className="flex items-center space-x-2">
        <Label htmlFor="case-sensitive-forms">Case-sensitive Forms:</Label>
        <Switch id="case-sensitive-forms" />
      </div>
    </div>
  );
};

export default Controls;
