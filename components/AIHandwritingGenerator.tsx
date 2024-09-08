'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, ChevronDown, ChevronUp, AlignLeft, AlignCenter, AlignRight, AlignJustify, Underline, Strikethrough, Italic, Type, Bold } from 'lucide-react'
import { getCharacterStrokes, getRandomVariation } from '../lib/characterStrokes'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

interface StrokeStyle {
  baselineVariability: number
  sizeVariability: number
  pressureVariability: number
  connectedness: number
}

const handwritingStyles: Record<string, StrokeStyle> = {
  print: { baselineVariability: 0.05, sizeVariability: 0.02, pressureVariability: 0.05, connectedness: 0.0 },
  cursive: { baselineVariability: 0.1, sizeVariability: 0.2, pressureVariability: 0.5, connectedness: 0.8 },
  messy: { baselineVariability: 0.1, sizeVariability: 0.4, pressureVariability: 0.7, connectedness: 0.5 },
  neat: { baselineVariability: 0, sizeVariability: 0.0, pressureVariability: 0.0, connectedness: 0.3 },
  calligraphy: { baselineVariability: 0.3, sizeVariability: 0.15, pressureVariability: 0.6, connectedness: 0.7 },
}

const LOREM_IPSUM = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`

export default function AIHandwritingGenerator() {
  const [inputText, setInputText] = useState(LOREM_IPSUM)
  const [strokeWidth, setStrokeWidth] = useState(2)
  const [handwritingStyle, setHandwritingStyle] = useState<keyof typeof handwritingStyles>('messy')
  const [slant, setSlant] = useState(0)
  const [fontSize, setFontSize] = useState(32)
  const [lineHeight, setLineHeight] = useState(48)
  const [fontFamily, setFontFamily] = useState('Lato')
  const [isControlsOpen, setIsControlsOpen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [alignment, setAlignment] = useState<CanvasTextAlign>('left')
  const [decoration, setDecoration] = useState<'none' | 'underline' | 'strikethrough'>('none')
  const [isItalic, setIsItalic] = useState(false)
  const [isBold, setIsBold] = useState(false)
  const [textCase, setTextCase] = useState('none')
  const [paragraphSpacing, setParagraphSpacing] = useState(29)
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [horizontalSpacing, setHorizontalSpacing] = useState(0)

  const [baselineVariability, setBaselineVariability] = useState(0.1)
  const [sizeVariability, setSizeVariability] = useState(0.4)
  const [pressureVariability, setPressureVariability] = useState(0.7)
  const [connectedness, setConnectedness] = useState(0.5)
  const [waviness, setWaviness] = useState(0.05)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    generateHandwriting()
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [inputText, strokeWidth, handwritingStyle, slant, fontSize, lineHeight, fontFamily, alignment, decoration, isItalic, isBold, textCase, paragraphSpacing, letterSpacing, horizontalSpacing, baselineVariability, sizeVariability, pressureVariability, connectedness, waviness, scale])

  const handleResize = () => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      generateHandwriting()
    }
  }

  const generateHandwriting = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let x = 50, y = 100
    ctx.strokeStyle = 'white'
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.font = `${isItalic ? 'italic ' : ''}${isBold ? 'bold ' : ''}${fontSize * scale}px ${fontFamily}`
    ctx.textAlign = alignment
    const style: StrokeStyle = handwritingStyles[handwritingStyle]
    
    const lines = inputText.split('\n')
    lines.forEach((line, lineIndex) => {
      const words = line.split(' ')
      words.forEach((word, wordIndex) => {
        const wordWidth = ctx.measureText(word).width
        if (x + wordWidth > canvas.width - 50) {
          x = 50
          y += lineHeight * scale
        }
        word.split('').forEach((char) => {
          const charWidth = ctx.measureText(char).width
          const charHeight = fontSize * scale
          drawCharacter(ctx, char, x, y + charHeight * 0.7, charWidth, charHeight, style)
          x += charWidth + letterSpacing * scale
        })
        x += (fontSize * 0.5 + horizontalSpacing) * scale // Space between words
      })
      x = 50
      y += (lineHeight + paragraphSpacing) * scale
    })
  }

  const drawCharacter = (
    ctx: CanvasRenderingContext2D, char: string, x: number, y: number, width: number, height: number, style: StrokeStyle
  ) => {
    const strokes = getRandomVariation(char)
    const scaleValue = Math.min(width / 100, height / 100) * scale
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(slant * Math.PI / 180)
    ctx.translate(-x, -y)
    ctx.beginPath()
    strokes.forEach((stroke, index) => {
      const startX = x + stroke.start[0] * scaleValue
      const startY = y + stroke.start[1] * scaleValue + Math.sin(x * waviness) * 5
      if (index === 0 || style.connectedness < Math.random()) ctx.moveTo(startX, startY)
      if (stroke.type === 'line') {
        const endX = x + stroke.end[0] * scaleValue
        const endY = y + stroke.end[1] * scaleValue + Math.sin((x + stroke.end[0]) * waviness) * 5
        ctx.lineTo(endX, endY)
      } else if (stroke.type === 'curve' && stroke.control) {
        const controlX = x + stroke.control[0] * scaleValue
        const controlY = y + stroke.control[1] * scaleValue + Math.sin((x + stroke.control[0]) * waviness) * 5
        const endX = x + stroke.end[0] * scaleValue
        const endY = y + stroke.end[1] * scaleValue + Math.sin((x + stroke.end[0]) * waviness) * 5
        ctx.quadraticCurveTo(controlX, controlY, endX, endY)
      }
      ctx.lineWidth = strokeWidth * scale * (0.5 + Math.random() * style.pressureVariability)
      ctx.stroke()
    })
    ctx.restore()
    addVariations(ctx, x, y, width, height, style)

    if (decoration === 'underline') {
      ctx.beginPath()
      ctx.moveTo(x, y + fontSize * 1.1 * scale)
      ctx.lineTo(x + width, y + fontSize * 1.1 * scale)
      ctx.stroke()
    } else if (decoration === 'strikethrough') {
      ctx.beginPath()
      ctx.moveTo(x, y + fontSize * 0.5 * scale)
      ctx.lineTo(x + width, y + fontSize * 0.5 * scale)
      ctx.stroke()
    }
  }

  const addVariations = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, style: StrokeStyle) => {
    const numVariations = Math.floor(2 * style.baselineVariability)
    for (let i = 0; i < numVariations; i++) {
      ctx.beginPath()
      const startX = x + Math.random() * width, startY = y + Math.random() * height
      ctx.moveTo(startX, startY)
      const endX = startX + (Math.random() - 0.5) * width * style.sizeVariability
      const endY = startY + (Math.random() - 0.1) * height * style.sizeVariability
      ctx.lineTo(endX, endY)
      ctx.lineWidth = strokeWidth * scale * 0.5 * style.pressureVariability
      ctx.stroke()
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.target.value
    if (textCase === 'uppercase') text = text.toUpperCase()
    else if (textCase === 'lowercase') text = text.toLowerCase()
    else if (textCase === 'capitalize') text = text.replace(/\b\w/g, l => l.toUpperCase())
    setInputText(text)
  }

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dataUrl = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = 'ai-generated-handwriting.png'
    link.click()
  }

  const handleNumericInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>,
    min: number,
    max: number
  ) => {
    const value = parseFloat(e.target.value)
    if (!isNaN(value)) {
      setter(Math.max(min, Math.min(max, value)))
    }
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute top-0 z-0 left-0 w-full h-full cursor-crosshair" onClick={generateHandwriting}></canvas>
      <div className="fixed bottom-4 left-4 right-4 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <Collapsible open={isControlsOpen} onOpenChange={setIsControlsOpen}>
            <CollapsibleTrigger asChild>
              <Button className="w-fullbg-black text-white hover:bg-gray-700">
                {isControlsOpen ? <ChevronDown className="mr-2 h-4 w-4" /> : <ChevronUp className="mr-2 h-4 w-4" />}
                Controls
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Card className="bg-transparent mt-2">
                <CardContent className="space-y-4 p-4">
                  <Tabs defaultValue="basics">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="basics">Basics</TabsTrigger>
                      <TabsTrigger value="style">Style</TabsTrigger>
                      <TabsTrigger value="layout">Layout</TabsTrigger>
                      <TabsTrigger value="randomness">Ran.</TabsTrigger>
                    </TabsList>
                    <TabsContent value="basics" className="space-y-4">
                      <Textarea 
                        value={inputText} 
                        onChange={handleTextChange} 
                        placeholder="Type your text here..." 
                        rows={5} 
                        className="w-full p-2bg-black text-white resize-none"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="handwriting-style">Handwriting Style</Label>
                          <Select value={handwritingStyle} onValueChange={(value: keyof typeof handwritingStyles) => setHandwritingStyle(value)}>
                            <SelectTrigger id="handwriting-style" className="bg-gray-700 border-gray-600">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600">
                              <SelectItem value="print">Print</SelectItem>
                              <SelectItem value="cursive">Cursive</SelectItem>
                              <SelectItem value="messy">Messy</SelectItem>
                              <SelectItem value="neat">Neat</SelectItem>
                              <SelectItem value="calligraphy">Calligraphy</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="font-size">Font Size: {fontSize}px</Label>
                          <Slider
                            id="font-size"
                            min={12}
                            max={72}
                            step={1}
                            value={[fontSize]}
                            onValueChange={(value) => setFontSize(value[0])}
                            className="mt-2"
                          />
                          <Input
                            type="number"
                            value={fontSize}
                            onChange={(e) => handleNumericInput(e, setFontSize, 1, 200)}
                            className="mt-2 w-fullbg-black text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Text Style</Label>
                        <div className="flex space-x-2 mt-2">
                          <Button variant={isBold ? 'default' : 'outline'} onClick={() => setIsBold(!isBold)} className="p-2">
                            <Bold className="h-4 w-4" />
                          </Button>
                          <Button variant={isItalic ? 'default' : 'outline'} onClick={() => setIsItalic(!isItalic)} className="p-2">
                            <Italic className="h-4 w-4" />
                          </Button>
                          <Button variant={decoration === 'underline' ? 'default' : 'outline'} onClick={() => setDecoration(decoration === 'underline' ? 'none' : 'underline')} className="p-2">
                            <Underline className="h-4 w-4" />
                          </Button>
                          <Button variant={decoration === 'strikethrough' ?  'default' : 'outline'} onClick={() =>  setDecoration(decoration === 'strikethrough' ? 'none' : 'strikethrough')} className="p-2">
                            <Strikethrough className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label>Alignment</Label>
                        <div className="flex space-x-2 mt-2">
                          <Button variant={alignment === 'left' ? 'default' : 'outline'} onClick={() => setAlignment('left')} className="p-2">
                            <AlignLeft className="h-4 w-4" />
                          </Button>
                          <Button variant={alignment === 'center' ? 'default' : 'outline'} onClick={() => setAlignment('center')} className="p-2">
                            <AlignCenter className="h-4 w-4" />
                          </Button>
                          <Button variant={alignment === 'right' ? 'default' : 'outline'} onClick={() => setAlignment('right')} className="p-2">
                            <AlignRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="style" className="space-y-4">
                      <div>
                        <Label htmlFor="stroke-width">Stroke Width: {strokeWidth.toFixed(1)}</Label>
                        <Slider
                          id="stroke-width"
                          min={0.5}
                          max={5}
                          step={0.1}
                          value={[strokeWidth]}
                          onValueChange={(value) => setStrokeWidth(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={strokeWidth}
                          onChange={(e) => handleNumericInput(e, setStrokeWidth, 0.1, 10)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="slant">Slant: {slant}°</Label>
                        <Slider
                          id="slant"
                          min={-45}
                          max={45}
                          step={1}
                          value={[slant]}
                          onValueChange={(value) => setSlant(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={slant}
                          onChange={(e) => handleNumericInput(e, setSlant, -90, 90)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="text-case">Text Case</Label>
                        <Select value={textCase} onValueChange={setTextCase}>
                          <SelectTrigger id="text-case" className="bg-gray-700 border-gray-600">
                            <SelectValue placeholder="Select case" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="uppercase">UPPERCASE</SelectItem>
                            <SelectItem value="lowercase">lowercase</SelectItem>
                            <SelectItem value="capitalize">Capitalize</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>
                    <TabsContent value="layout" className="space-y-4">
                      <div>
                        <Label htmlFor="line-height">Line Height: {lineHeight}px</Label>
                        <Slider
                          id="line-height"
                          min={20}
                          max={200}
                          step={1}
                          value={[lineHeight]}
                          onValueChange={(value) => setLineHeight(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={lineHeight}
                          onChange={(e) => handleNumericInput(e, setLineHeight, 1, 300)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="letter-spacing">Letter Spacing: {letterSpacing}px</Label>
                        <Slider
                          id="letter-spacing"
                          min={-5}
                          max={20}
                          step={0.5}
                          value={[letterSpacing]}
                          onValueChange={(value) => setLetterSpacing(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={letterSpacing}
                          onChange={(e) => handleNumericInput(e, setLetterSpacing, -10, 50)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="horizontal-spacing">Word Spacing: {horizontalSpacing}px</Label>
                        <Slider
                          id="horizontal-spacing"
                          min={0}
                          max={50}
                          step={1}
                          value={[horizontalSpacing]}
                          onValueChange={(value) => setHorizontalSpacing(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={horizontalSpacing}
                          onChange={(e) => handleNumericInput(e, setHorizontalSpacing, 0, 100)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="paragraph-spacing">Paragraph Spacing: {paragraphSpacing}px</Label>
                        <Slider
                          id="paragraph-spacing"
                          min={0}
                          max={100}
                          step={1}
                          value={[paragraphSpacing]}
                          onValueChange={(value) => setParagraphSpacing(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={paragraphSpacing}
                          onChange={(e) => handleNumericInput(e, setParagraphSpacing, 0, 200)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="randomness" className="space-y-4">
                      <div>
                        <Label htmlFor="baseline-variability">Baseline Variability: {baselineVariability.toFixed(2)}</Label>
                        <Slider
                          id="baseline-variability"
                          min={0}
                          max={1}
                          step={0.01}
                          value={[baselineVariability]}
                          onValueChange={(value) => setBaselineVariability(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={baselineVariability}
                          onChange={(e) => handleNumericInput(e, setBaselineVariability, 0, 2)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="size-variability">Size Variability: {sizeVariability.toFixed(2)}</Label>
                        <Slider
                          id="size-variability"
                          min={0}
                          max={1}
                          step={0.01}
                          value={[sizeVariability]}
                          onValueChange={(value) => setSizeVariability(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={sizeVariability}
                          onChange={(e) => handleNumericInput(e, setSizeVariability, 0, 2)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pressure-variability">Pressure Variability: {pressureVariability.toFixed(2)}</Label>
                        <Slider
                          id="pressure-variability"
                          min={0}
                          max={1}
                          step={0.01}
                          value={[pressureVariability]}
                          onValueChange={(value) => setPressureVariability(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={pressureVariability}
                          onChange={(e) => handleNumericInput(e, setPressureVariability, 0, 2)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="connectedness">Connectedness: {connectedness.toFixed(2)}</Label>
                        <Slider
                          id="connectedness"
                          min={0}
                          max={1}
                          step={0.01}
                          value={[connectedness]}
                          onValueChange={(value) => setConnectedness(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={connectedness}
                          onChange={(e) => handleNumericInput(e, setConnectedness, 0, 2)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="waviness">Waviness: {waviness.toFixed(2)}</Label>
                        <Slider
                          id="waviness"
                          min={0}
                          max={0.1}
                          step={0.001}
                          value={[waviness]}
                          onValueChange={(value) => setWaviness(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={waviness}
                          onChange={(e) => handleNumericInput(e, setWaviness, 0, 0.5)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="scale">Scale: {scale.toFixed(2)}</Label>
                        <Slider
                          id="scale"
                          min={0.5}
                          max={2}
                          step={0.01}
                          value={[scale]}
                          onValueChange={(value) => setScale(value[0])}
                          className="mt-2"
                        />
                        <Input
                          type="number"
                          value={scale}
                          onChange={(e) => handleNumericInput(e, setScale, 0.1, 5)}
                          className="mt-2 w-fullbg-black text-white"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <Button onClick={handleDownload} className="fixed bottom-4 right-4bg-black text-white hover:bg-gray-700">
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>
  )
}