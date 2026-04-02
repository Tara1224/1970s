# 1970s
## Overview
This project explores how interior design images from magazines can be organized using simple categories. The goal is to make the images searchable and easier to compare by describing them with consistent terms.

The images come from sources such as Architectural Digest and Better Homes and Gardens. Rather than focusing on the images themselves, this project focuses on how they can be described and structured as data.

---

## Data Collection
I collected images from:
- Architectural Digest
- Better Homes and Gardens

Each image represents a different room or interior space. The goal was not to collect a large dataset, but to begin organizing and describing the images in a structured way.

---

## Ontology
To make the images searchable, I created a set of reusable categories:

- **roomType**: living room, kitchen, bedroom, bathroom
- **colors**: red, orange, yellow, green, etc.
- **style**: modern, rustic, minimalist, vintage
- **materials**: wood, marble, glass, metal
- **furniture**: table, couch, bed, chair, etc.

These categories allow the images to be grouped and searched (for example: all kitchens with red and wood).

---
## Copyright and Fair Use 

The images used in this project come from published magazines and are copyrighted. This project is for educational purposes only and does not use the images commercially. The images are being analyzed and categorized rather than simply reproduced.


---

## Magazines Used

- Architectural Digest 1975, 1977, 1978
- Better Homes and Gardens...

---



## Future Improvements

- Be more selective with images and focus on clear room/interior shots   
- Refine and standardize category terms    
 

---

## Repository Contents

- Image files  
- XML data file  
- README documentation  
## Data Structure
The data is organized using XML. Each image is represented with a pointer to the file and descriptive tags.

Example structure:
```xml
<mag>
    <ptr target="image1.jpg"/>
    <roomType>living room</roomType>
    <colors>green, beige</colors>
    <style>modern</style>
    <materials>wood, fabric</materials>
</mag>