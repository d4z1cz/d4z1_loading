local Ran = false

AddEventHandler("playerSpawned", function ()
	if not Ran then
		SetNuiFocus(false, false) 
		ShutdownLoadingScreenNui()
		Ran = true
	end
end)
