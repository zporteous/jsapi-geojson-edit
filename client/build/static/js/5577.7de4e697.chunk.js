"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[5577],{48202:function(e,n,t){var i,r,o,l,a,u,c,s,f,d,p,m,h,y,g,C,S,P,R,M,T,v,L,O,B,x,b,w,N,k,A,I,F,Z,E,D,W,z,U,H,G,V,X,J,q,Y,Q,_,K,j,$,ee,ne,te,ie,re,oe,le,ae,ue,ce;t.d(n,{$y:function(){return v},AH:function(){return r},CS:function(){return Q},DD:function(){return s},Dd:function(){return N},Em:function(){return T},JS:function(){return q},Ky:function(){return f},Lh:function(){return _},Qb:function(){return oe},RL:function(){return i},RS:function(){return ae},TF:function(){return M},Tx:function(){return a},UR:function(){return S},UX:function(){return re},bj:function(){return Y},eZ:function(){return c},id:function(){return B},kP:function(){return D},of:function(){return p},r4:function(){return H},sj:function(){return W},v2:function(){return o},zQ:function(){return w},zV:function(){return C}}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(o||(o={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(l||(l={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(a||(a={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(u||(u={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(c||(c={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(s||(s={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(d||(d={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(p||(p={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(m||(m={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(h||(h={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(y||(y={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(g||(g={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(C||(C={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(S||(S={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(P||(P={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(R||(R={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(M||(M={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(T||(T={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(v||(v={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(L||(L={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(O||(O={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(B||(B={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(x||(x={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(b||(b={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(w||(w={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(N||(N={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(k||(k={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(A||(A={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(I||(I={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(F||(F={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(Z||(Z={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(E||(E={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(D||(D={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(W||(W={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(z||(z={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(U||(U={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(H||(H={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(G||(G={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(V||(V={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(X||(X={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(J||(J={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(q||(q={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(Y||(Y={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(Q||(Q={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(_||(_={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(K||(K={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(j||(j={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}($||($={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(ne||(ne={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(te||(te={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(ie||(ie={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(re||(re={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(oe||(oe={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(le||(le={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(ae||(ae={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ue||(ue={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ce||(ce={}))},85577:function(e,n,t){t.d(n,{r:function(){return T}});var i=t(93433),r=t(15671),o=t(43144),l=t(60136),a=t(54062),u=(t(59486),t(52639)),c=(t(51508),t(42537)),s=t(17842),f=t(88396),d=t(6394),p=t(71353),m=t(48202),h=t(70040),y=t(76014),g=t(38561),C=t(16072),S=t(16851),P=t(75021),R=t(7882),M=t(29909),T=function(e){(0,l.Z)(t,e);var n=(0,a.Z)(t);function t(e){var i;return(0,r.Z)(this,t),(i=n.call(this)).graphicsLayer=e,i}return(0,o.Z)(t,[{key:"visualizeIntersectionPoint",value:function(e,n){return this._visualizeSnappingIndicator(new R.Z({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:n.coordinateHelper.spatialReference}),O)}},{key:"visualizePoint",value:function(e,n){return this._visualizeSnappingIndicator(new R.Z({x:e.point[0],y:e.point[1],spatialReference:n.coordinateHelper.spatialReference}),B)}},{key:"visualizeLine",value:function(e,n){return this._visualizeSnappingIndicator(new M.Z({paths:[[e.lineStart,e.lineEnd]],spatialReference:n.coordinateHelper.spatialReference}),x)}},{key:"visualizeParallelSign",value:function(e,n){return this._visualizeSnappingIndicator(new M.Z({paths:[[e.lineStart,e.lineEnd]],spatialReference:n.coordinateHelper.spatialReference}),b)}},{key:"visualizeRightAngleQuad",value:function(e,n){return this._visualizeSnappingIndicator(new M.Z({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:n.coordinateHelper.spatialReference}),A(e))}},{key:"_visualizeSnappingIndicator",value:function(e,n){var t=this,i=new u.Z({geometry:e,symbol:n});return this.graphicsLayer.add(i),(0,c.kB)((function(){t.graphicsLayer.remove(i)}))}}]),t}(g.a),v=h.O.main.toArray(),L=[].concat((0,i.Z)(h.O.main.toRgb()),[100]),O=new C.default({outline:new S.default({width:1.5,color:v}),size:15,color:[0,0,0,0]}),B=new C.default({outline:{width:.5,color:[0,0,0,1]},size:10,color:v}),x=new P.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:m.kP.Butt,joinStyle:m.r4.Round,miterLimit:10,width:(0,s.Wz)(y.c.lineHintWidthTarget),color:v}]}}}),b=new P.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:v}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:v}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),w=function(e){return new P.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:(0,s.Wz)(y.c.rightAngleHintSize),rotation:e,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:(0,s.Wz)(y.c.rightAngleHintOutlineSize),color:v},{type:"CIMSolidFill",enable:!0,color:L}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})},N=w(45),k=w(225),A=function(){var e=(0,d.a)(),n=(0,d.a)(),t=(0,p.c)();return function(i){return(0,f.g)(e,i.centerVertex,i.previousVertex),(0,f.g)(n,i.nextVertex,i.previousVertex),(0,f.m)(t,e,n),t[2]<0?N:k}}()},70040:function(e,n,t){t.d(n,{O:function(){return l},X:function(){return p}});var i=t(43144),r=t(15671),o=t(51995),l={main:new o.Z([255,127,0]),selected:new o.Z([255,255,255]),outline:new o.Z([0,0,0,.5]),selectedOutline:new o.Z([255,255,255]),hoverOutline:new o.Z([255,255,255]),secondary:new o.Z([255,255,255]),secondaryOutline:new o.Z([100,100,100]),transparent:new o.Z([0,0,0,0])};function a(e,n){if(n)for(var t in n)e[t]=n[t]}var u=(0,i.Z)((function e(n){(0,r.Z)(this,e),this.size=8,this.hoverSize=10,this.color=l.main,this.hoverColor=l.main,this.outlineColor=l.outline,this.hoverOutlineColor=l.hoverOutline,a(this,n)})),c=(0,i.Z)((function e(n){(0,r.Z)(this,e),this.color=l.secondary,this.hoverColor=l.main,a(this,n)})),s=(0,i.Z)((function e(n){(0,r.Z)(this,e),this.color=l.transparent,this.hoverColor=l.transparent,this.outlineColor=l.main,this.hoverOutlineColor=l.main,this.stagedColor=l.transparent,this.stagedOutlineColor=l.secondary,a(this,n)})),f=(0,i.Z)((function e(n){(0,r.Z)(this,e),this.vertex=new u,this.midpoint=new u({color:l.secondary,outlineColor:l.secondaryOutline,size:6}),this.selected=new u({color:l.selected,hoverColor:l.selected,hoverOutlineColor:l.hoverOutline}),a(this,n)})),d=(0,i.Z)((function e(n){(0,r.Z)(this,e),this.center=new u({color:l.secondaryOutline}),this.fill=new s,this.line=new c,this.vertex=new u({color:l.selected,outlineColor:l.main,hoverColor:l.selected,hoverOutlineColor:l.secondaryOutline}),a(this,n)})),p=new((0,i.Z)((function e(n){(0,r.Z)(this,e),this.reshapeGraphics=new f,this.transformGraphics=new d,a(this,n)})))}}]);
//# sourceMappingURL=5577.7de4e697.chunk.js.map