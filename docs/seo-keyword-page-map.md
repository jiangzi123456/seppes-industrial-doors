# SEPPES keyword and page map

Updated: 2026-11-17

## Evidence boundary

The supplied keyword workbook contains product categories, product names and English selling-point descriptions. It does not contain target country, monthly search volume, keyword difficulty, CPC or search-result type. The map below assigns page roles from the available terms; it does not claim demand or ranking opportunity.

## Page responsibilities

| Search intent | Primary topic | Target URL | Page role | Main conversion |
| --- | --- | --- | --- | --- |
| Product category | high speed doors | `/products/high-speed-doors` | Compare flexible and rigid high-speed door directions | Select a product or send opening details |
| Product category | industrial sectional doors | `/products/industrial-sectional-doors` | Explain insulated overhead access and track selection | Review the sectional-door product |
| Product category | loading dock equipment | `/products/loading-dock-equipment` | Coordinate leveler and shelter selection | Send dock and vehicle data |
| Specific product | high speed roll up door | `/products/high-speed-roll-up-door` | PVC rapid-door specification and application fit | Request a configuration |
| Specific product | high speed spiral door | `/products/high-speed-spiral-door` | Rigid insulated rapid-door specification and application fit | Request a configuration |
| Specific product | hydraulic dock leveler | `/products/hydraulic-dock-leveler` | Leveler format, load and dock-planning guidance | Send dock and load information |
| Specific product | zipper high speed door | `/products/zipper-high-speed-door` | Zipper-guided flexible-door fit | Request a configuration |
| Specific product | industrial sectional door | `/products/industrial-sectional-door` | Panel, track and access planning | Request a configuration |
| Application | factory, warehouse, clean area, loading bay | Matching `/solutions/...` page | Explain the operational problem and relevant systems | Continue to matching product pages |
| Attribute | PVC, automatic, insulated, wind resistant, heavy duty | Relevant category and product sections | Explain a selection condition, not create a separate thin page | Continue to technical data or contact |

## URL hierarchy

```text
/
└── /products
    ├── /products/high-speed-doors
    │   ├── /products/high-speed-roll-up-door
    │   ├── /products/zipper-high-speed-door
    │   ├── /products/high-speed-spiral-door
    │   ├── /products/stacking-high-speed-door
    │   └── /products/garage-high-speed-door
    ├── /products/industrial-sectional-doors
    │   └── /products/industrial-sectional-door
    └── /products/loading-dock-equipment
        ├── /products/hydraulic-dock-leveler
        └── /products/dock-shelter
```

Existing product URLs remain unchanged. Category pages provide navigation and topical hierarchy rather than moving product routes and creating redirects.

## Terms requiring additional research

`manufacturer`, `supplier`, `factory` and `price` were not present in the supplied GSC exports or keyword workbook. Research these terms by target country before assigning them to pages. Do not publish price pages or price ranges because the website content policy prohibits them.

Required fields for the next keyword research import:

- Target country and language
- Monthly search volume
- Keyword difficulty or competition metric
- Search-result type and dominant page format
- Current ranking URL, if any
- Commercial relevance to SEPPES

## Implementation status

- Three category-centre routes: implemented locally.
- Category links in product hub, header, footer, search and sitemap: implemented locally.
- Category-aware breadcrumbs and contextual links on priority product pages: implemented locally.
- Technical indexability audit of the 43 discovered URLs: completed; no robots, noindex or HTTP-status block found.
- GSC URL Inspection and indexing requests: requires an authenticated Search Console session after deployment.
- Redirect and 404 repair: requires the URL-level drilldown exports for those two coverage reasons.
