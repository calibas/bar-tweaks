--Air Only
for name, ud in pairs(UnitDefs) do
    for index, value in ipairs({'corlab', 'corsy', 'corvp','corhp','corfhp','corgant','coramsub','armlab', 'armsy', 'armvp','armhp','armfhp','armshltx','armamsub','leglab', 'legsy', 'legvp','leghp','legfhp','leggant','legamsub',}) do
        if name == value then
          ud.maxthisunit = 0
          break
        end
      end
end