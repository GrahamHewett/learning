def potatoes(p0, w0, p1)
    water_kg = ((w0)*(p0)/100.0)
    matter = w0-water_kg
    divisor = (1.0-(p1/100.0))
    final_weight = matter/divisor
    print final_weight.floor
    return final_weight.truncate
end
