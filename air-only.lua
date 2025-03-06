--Air Only
for name, ud in pairs(UnitDefs) do
  --Remove non-air factories
  for index, value in ipairs({
    'corlab', 'corsy', 'corvp','corhp','corfhp','corgant','coramsub',
    'armlab', 'armsy', 'armvp','armhp','armfhp','armshltx','armamsub',
    'leglab', 'legsy', 'legvp','leghp','legfhp','leggant','legamsub',
  }) do
    if name == value then
      ud.maxthisunit = 0
      break
    end
  end
  -- Nerf anti-air towers
  if name == 'armmercury' then
    ud.weapondefs.arm_advsam.damage.vtol = 250
  end
  if name == 'corscreamer' then
    ud.weapondefs.cor_advsam.damage.vtol = 250
  end
  if name == 'leglraa' then
    ud.weapondefs.cor_advsam.damage.vtol = 250
    ud.weapondefs.railgunt2.damage.vtol = 250
  end
end